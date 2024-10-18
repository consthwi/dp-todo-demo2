import styled from "@emotion/styled";
import { Button, Grid2 } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import React from "react";

const TodoItemContainer = styled(Grid2)(() => ({
  padding: "10px 0",
  borderBottom: "3px dashed #e0736888",
}));

const ButtonWrapper = styled("div")(() => ({
  display: "flex",
  gap: "5px",
}));

const ButtonDelete = styled(Button)(() => ({
  border: "none",
  boxShadow: "#e07368 1px 1px 3px",
  color: "salmon",
  "&:hover": { backgroundColor: "#e07368", color: "#fff" },
}));

const ButtonDone = styled(Button)(() => ({
  border: "none",
  boxShadow: "#87c5f9 1px 1px 3px",
  color: "#87c5f9",
  "&:hover": { backgroundColor: "#87c5f9", color: "#fff" },
}));

const ButtonUndone = styled(Button)(() => ({
  border: "none",
  boxShadow: "#7cc1b0 1px 1px 3px",
  color: "#7cc1b0",
  "&:hover": { backgroundColor: "#7cc1b0", color: "#fff" },
}));

const TodoItem = () => {
  return (
    <TodoItemContainer container spacing={2}>
      <Grid2 size={"grow"}>
        <div>NodeJS복습하기</div>
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
  );
};

export default TodoItem;
