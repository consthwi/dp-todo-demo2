import { Button, Container, Grid2, TextField } from "@mui/material";
import "./App.css";
import styled from "@emotion/styled";
import TodoBoard from "./components/TodoBoard";

const TodoContainer = styled(Container)(() => ({
  padding: "1rem",
}));

const TodoTitle = styled("h1")(() => ({
  fontSize: "2rem",
  color: "salmon",
  textAlign: "center",
}));

const TextArea = styled(Grid2)(() => ({}));

const TodoInput = styled(TextField)(() => ({
  color: "#8c7967",
  transition: "0.3s all",
  backgroundColor: "#ffffff11",
  // border: "1px solid #e07368",
  borderRadius: "5px",
  "&:hover": { background: "#ffffff88" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#cccccc", // 기본 테두리 색상
    },
    "&:hover fieldset": {
      borderColor: "#e07368", // 마우스 호버 시 테두리 색상
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e07368", // 포커스 시 테두리 색상
    },
  },
}));

const AddButton = styled(Button)(() => ({
  width: "100%",
  height: "100%",
  fontSize: "1.5rem",
  padding: "0.1rem",
  border: "none",
  boxShadow: "#e07368 1px 1px 3px",
  color: "#fff",
  backgroundColor: "#e07368",
  "&:hover": { backgroundColor: "#e07368", color: "#fff" },
  "@media(max-width:900px)": { fontSize: "1rem" },
}));

function App() {
  return (
    <TodoContainer>
      <TodoTitle>Todo-App</TodoTitle>
      <TextArea container spacing={{ xs: 1, md: 2 }}>
        <Grid2 size={{ xs: 12, md: 10 }}>
          <TodoInput
            placeholder="What are you going to do today?"
            color="#8c7967"
            fullWidth
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <AddButton variant="contained">+</AddButton>
        </Grid2>
      </TextArea>
      <TodoBoard />
    </TodoContainer>
  );
}

export default App;
