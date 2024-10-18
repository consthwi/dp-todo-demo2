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
  "&:hover": { boxShadow: "salmon 0px -2px 2px inset" },
}));

const AddButton = styled(Button)(() => ({
  width: "100%",
  height: "100%",
  fontSize: "1.5rem",
  padding: "0.1rem",
  border: "none",
  boxShadow: "#e07368 1px 1px 3px",
  color: "salmon",
  backgroundColor: "#fff",
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
            placeholder="할 일을 적어주세요"
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
