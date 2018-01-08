import React, {Component} from "react";
import PropTypes from "prop-types";
import {DragSource, DropTarget} from "react-dnd";
import ItemTypes from "./ItemTypes";
import {Icon} from 'antd';

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
  position: "relative"
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props
        .findCard(props.id)
        .index
    };
  },

  endDrag(props, monitor) {
    const {id: droppedId, originalIndex} = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveCard(droppedId, originalIndex);
    }
  }
};

const cardTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const {id: draggedId} = monitor.getItem();
    const {id: overId} = props;

    if (draggedId !== overId) {
      const {index: overIndex} = props.findCard(overId);
      props.moveCard(draggedId, overIndex);
    }
  }
};

// @DropTarget(ItemTypes.CARD, cardTarget, connect => ({ 	connectDropTarget:
// connect.dropTarget(), })) @DragSource(ItemTypes.CARD, cardSource, (connect,
// monitor) => ({ 	connectDragSource: connect.dragSource(), 	isDragging:
// monitor.isDragging(), }))
class Card extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    moveCard: PropTypes.func.isRequired,
    findCard: PropTypes.func.isRequired
  };

  render() {
    const {isDragging, connectDragSource, connectDropTarget, handleEdit, handleDelete} = this.props;
    const opacity = isDragging
      ? 0
      : 1;

    return connectDragSource(connectDropTarget(
      <div style={{
        ...style,
        opacity
      }}>
        <div
          style={{
          position: "absolute",
          right: "-30px",
          top: 0,
          cursor: "pointer"
        }}
          onClick={e => handleEdit(e, this.props.id)}>
          <Icon type="edit" className="z-icon-hover"/>
        </div>
        <div
          style={{
          position: "absolute",
          right: "-50px",
          top: 0,
          cursor: "pointer"
        }}
          onClick={e => handleDelete(e, this.props.id)}>
          <Icon type="delete" className="z-icon-hover"/>
        </div>

        {this.props.children}
      </div>
    ));
  }
}

export default DropTarget(ItemTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Card));
