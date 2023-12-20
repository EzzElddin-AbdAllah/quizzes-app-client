import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
} from "@mui/material";

const QuizList = () => {
  const quizzes = [
    {
      quizName: "Quiz 1",
      courseName: "Math",
      topicName: "Algebra",
      dueDate: "September 25, 2023",
    },
    {
      quizName: "Quiz 2",
      courseName: "Science",
      topicName: "Biology",
      dueDate: "September 28, 2023",
    },
    // Add more quizzes as needed
  ];

  return (
    <Card style={{ maxHeight: "300px", overflowY: "auto" }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h5" component="div" gutterBottom>
          What's Duo
        </Typography>

        {/* List of quizzes */}
        <List>
          {quizzes.map((quiz, index) => (
            <div key={index}>
              <ListItem>
                <Typography variant="body1" color="textPrimary">
                  Quiz Name: {quiz.quizName}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" color="textSecondary">
                  Course: {quiz.courseName}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" color="textSecondary">
                  Topic: {quiz.topicName}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" color="textSecondary">
                  Due to: {quiz.dueDate}
                </Typography>
              </ListItem>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%", marginTop: "8px" }}
              >
                Start Quiz
              </Button>
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default QuizList;
