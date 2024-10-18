import styled from "@emotion/styled";
import { Button, Grid2 } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import React from "react";

const TodoItemContainer = styled(Grid2)(() => ({
  padding: "10px 0",
  borderBottom: "3px dashed #e0736888",
  display: "flex",
  alignItems: "center",
}));

const ButtonWrapper = styled("div")(() => ({
  display: "flex",
  gap: "5px",
}));

const ButtonDelete = styled(Button)(() => ({
  border: "none",
  boxShadow: "#e07368 1px 1px 3px",
  color: "salmon",
  fontSize: "0.6rem",
  padding: "0.4rem",
  "&:hover": { backgroundColor: "#e07368", color: "#fff" },
  "@media(min-width: 900px)": {
    fontSize: "0.8rem",
    padding: "0.4rem 0.8rem",
  },
}));

const ButtonDone = styled(Button)(() => ({
  border: "none",
  boxShadow: "#87c5f9 1px 1px 3px",
  color: "#87c5f9",
  fontSize: "0.6rem",
  padding: "0.4rem",
  "&:hover": { backgroundColor: "#87c5f9", color: "#fff" },
  "@media(min-width: 900px)": {
    fontSize: "0.8rem",
    padding: "0.4rem 0.8rem",
  },
}));

const ButtonUndone = styled(Button)(() => ({
  border: "none",
  boxShadow: "#7cc1b0 1px 1px 3px",
  color: "#7cc1b0",
  fontSize: "0.6rem",
  padding: "0.4rem",
  "&:hover": { backgroundColor: "#7cc1b0", color: "#fff" },
  "@media(min-width: 900px)": {
    fontSize: "0.8rem",
    padding: "0.4rem 0.8rem",
  },
}));

const TodoTask = styled("p")(() => ({
  fontFamily: "'Dongle', sans-serif",
  fontSize: "1.5rem",
  margin: "10px 0",
  color: "#555",
}));

const TodoItem = () => {
  return (
    <>
      <TodoItemContainer container spacing={2}>
        <Grid2 size={"grow"}>
          <TodoTask>NodeJS복습하기</TodoTask>
        </Grid2>
        <Grid2>
          <ButtonWrapper>
            <ButtonDelete variant="outlined" startIcon={<DeleteIcon />}>
              Del
            </ButtonDelete>
            <ButtonDone variant="outlined" startIcon={<CheckIcon />}>
              Done
            </ButtonDone>
            {/* <ButtonUndone variant="outlined" startIcon={<UndoIcon />}>
            Undo
          </ButtonUndone> */}
          </ButtonWrapper>
        </Grid2>
      </TodoItemContainer>
      <TodoItemContainer container spacing={2}>
        <Grid2 size={"grow"}>
          <TodoTask>NodeJS복습하기</TodoTask>
        </Grid2>
        <Grid2>
          <ButtonWrapper>
            <ButtonDelete variant="outlined" startIcon={<DeleteIcon />}>
              Del
            </ButtonDelete>
            <ButtonDone variant="outlined" startIcon={<CheckIcon />}>
              Done
            </ButtonDone>
            {/* <ButtonUndone variant="outlined" startIcon={<UndoIcon />}>
            Undo
          </ButtonUndone> */}
          </ButtonWrapper>
        </Grid2>
      </TodoItemContainer>
      <TodoItemContainer container spacing={2}>
        <Grid2 size={"grow"}>
          <TodoTask>NodeJS복습하기</TodoTask>
        </Grid2>
        <Grid2>
          <ButtonWrapper>
            <ButtonDelete variant="outlined" startIcon={<DeleteIcon />}>
              Del
            </ButtonDelete>
            <ButtonDone variant="outlined" startIcon={<CheckIcon />}>
              Done
            </ButtonDone>
            {/* <ButtonUndone variant="outlined" startIcon={<UndoIcon />}>
            Undo
          </ButtonUndone> */}
          </ButtonWrapper>
        </Grid2>
      </TodoItemContainer>
    </>
  );
};

export default TodoItem;
