import { render, screen } from "@testing-library/react";
import TestHeader from "./TestHeader";

test("isLogin 이 true 로 전달이 잘 된 상태에서, userID 가 잘 뜨는지 확인", () => {
  render(<TestHeader isLogin={true} userID="tetz" />);
  const textEl = screen.getByText(/tetz님 환영 합니다!/i);
  expect(textEl).toBeInTheDocument();
});

test("isLogin 이 false 일 때, 문구와 button 이 정상 출력 되는지 확인", () => {
  render(<TestHeader isLogin={false} />);
  const textEl = screen.getByText(/로그인 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
