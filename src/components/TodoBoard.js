import React from "react";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";
import boardSideImg from "../assets/board_side.png";

const TodoBoardContainer = styled("div")(() => ({
  backgroundColor: "#d6a96d",
  borderRadius: "2rem",
  padding: "1rem 0.5rem",
  margin: "30px 0",
  position: "relative",
}));

const TodoBoardWrapper = styled("div")(() => ({
  backgroundColor: "#fff",
  borderRadius: "2rem",
  padding: "2rem 1rem 2rem 3rem",
}));

const TodoBoardSide = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  left: "-5px",
  width: "30px",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const BoardSideImg = styled("img")(() => ({
  width: "100%",
  margin: "10px 0",
}));

const TodoBoardTitle = styled("h2")(() => ({
  fontSize: "1.7rem",
  color: "#salmon",
  margin: "10px 0",
}));

const TodoBoard = () => {
  return (
    <TodoBoardContainer>
      <TodoBoardSide>
        <BoardSideImg src={boardSideImg} />
        <BoardSideImg src={boardSideImg} />
        <BoardSideImg src={boardSideImg} />
        <BoardSideImg src={boardSideImg} />
      </TodoBoardSide>
      <TodoBoardWrapper>
        <TodoBoardTitle>Todo List</TodoBoardTitle>
        <TodoItem />
      </TodoBoardWrapper>
    </TodoBoardContainer>
  );
};

export default TodoBoard;
