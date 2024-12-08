import { Form, Radio, Button, Modal, Card } from "antd";
import trivia from "../assets/trivia.json";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import "../styles/Quiz.scss";
import {
  MichaelApproves,
  MichaelDisapproves,
  MichaelSlightlyApproves,
} from "../assets";

export const QuizPage = () => {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [resultImageSrc, setResultImageSrc] = useState("");
  const [resultImageAlt, setResultImageAlt] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    let correctAnswers = 0;

    trivia.questions.forEach((q) => {
      const userAnswer = values[`question-${q.key}`];
      if (userAnswer === q.correct) {
        correctAnswers += 1;
      }
    });

    switch (true) {
      case correctAnswers <= 5:
        setResult(
          `Seems like you could use another rewatch! You got ${correctAnswers} correct answers.`
        );
        setResultImageSrc(MichaelDisapproves);
        setResultImageAlt("Michael disapproves");
        break;
      case correctAnswers >= 6 && correctAnswers <= 8:
        setResult(`Not too bad! You got ${correctAnswers} out of 10 right.`);
        setResultImageSrc(MichaelSlightlyApproves);
        setResultImageAlt("Michael slightly approves");
        break;
      case correctAnswers >= 9 && correctAnswers <= 10:
        setResult(`Great job! ${correctAnswers} out of 10! `);
        setResultImageSrc(MichaelApproves);
        setResultImageAlt("Michael approves");
        break;
    }

    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="custom-h1">
        <h1>
          <span>The Office trivia quiz</span>
        </h1>
      </div>
      <div className="form-container">
        <Form onFinish={onFinish} form={form}>
          {trivia.questions.map((q) => (
            <Card key={`div-${q.key}`} className="question-container">
              <p key={`p-${q.key}`}>
                {q.key}. {q.question}
              </p>
              <Form.Item
                key={q.key}
                name={`question-${q.key}`}
                rules={[
                  { required: true, message: "Please select an answer!" },
                ]}
              >
                <Radio.Group>
                  {q.answers.map((answer, index) => (
                    <Radio
                      value={index + 1}
                      key={index}
                      className="radio-answer"
                    >
                      {answer}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </Card>
          ))}

          <Form.Item>
            <div className="submit-container">
              <Button className="submit-btn" htmlType="submit" shape="round">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <div>
              <Button onClick={handleCancel} type="dashed" shape="circle">
                Ok
              </Button>
            </div>
          }
        >
          <h2>{result}</h2>
          <img
            src={resultImageSrc}
            alt={resultImageAlt}
            className="quiz-result-image"
          />
        </Modal>
      </div>
    </div>
  );
};
