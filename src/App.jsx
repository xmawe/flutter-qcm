import QuestionCollapse from "./components/QuestionCollapse";
import "./index.css";
import React, { useState } from "react";
import { Questions } from "./Questions";
import { getBookmarked, setBookmarkedToStorage } from "./utils/bookmark";

function App() {
  const [parentCollapse, setParentCollapse] = useState(true);
  const [questions, setQuestions] = useState(Questions);
  const [bookmarked, setBookmarked] = useState(getBookmarked);
  const [searchQuestion, setSearchQuestion] = useState();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleShuffle = () => {
    const shuffledQuestions = shuffleArray([...questions]);
    setQuestions(shuffledQuestions);
  };

  const handleBookmark = (number) => {
    setBookmarked(number);
    setBookmarkedToStorage(number);
  };

  const handleGotoQuestion = (goto) => {
    // Find the div element with the specified id
    const element = document.getElementById("question-" + goto);

    // Check if the element exists
    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col justify-center gap-6 my-8 mx-3">
      <div className="m-auto text-gray-100 max-w-xl w-full text-2xl">
        <h1>Preparation for the MD exam</h1>
        <h2 className="text-lg text-gray-400">
          Total number of Questions: {questions.length}
        </h2>
        <div className="m-auto mt-4 justify-between flex gap-3 text-gray-100 max-w-xl w-full text-2xl">
          <div>
            <div className="flex rounded-lg bg-[#ffffff0a] overflow-hidden">
              <input
                className="text-sm h-full bg-transparent p-[10px] min-w-[100px]  outline-none font-semibold "
                type="number"
                min="1"
                value={searchQuestion}
                onChange={(e) => setSearchQuestion(e.target.value)}
                max={questions.length}
                name=""
                placeholder="Question N°"
                id=""
              />
              <button
                className=" p-2 rounded-e-lg hover:bg-[#ffffff13] duration-300"
                title="Shuffle questions"
                onClick={() => handleGotoQuestion(searchQuestion)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-[#ffffff0a] p-2 rounded-lg hover:bg-[#ffffff13] duration-300"
              title="Show all answers"
              onClick={() => setParentCollapse((prev) => !prev)}
            >
              {!parentCollapse ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <button
              className="bg-[#ffffff0a] p-2 rounded-lg hover:bg-[#ffffff13] duration-300"
              title="Shuffle questions"
              onClick={handleShuffle}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L21 18M21 18L18 21M21 18H18.5689C17.6297 18 17.1601 18 16.7338 17.8705C16.3564 17.7559 16.0054 17.5681 15.7007 17.3176C15.3565 17.0348 15.096 16.644 14.575 15.8626L14.3333 15.5M18 3L21 6M21 6L18 9M21 6H18.5689C17.6297 6 17.1601 6 16.7338 6.12945C16.3564 6.24406 16.0054 6.43194 15.7007 6.68236C15.3565 6.96523 15.096 7.35597 14.575 8.13744L9.42496 15.8626C8.90398 16.644 8.64349 17.0348 8.29933 17.3176C7.99464 17.5681 7.64357 17.7559 7.2662 17.8705C6.83994 18 6.37033 18 5.43112 18H3M3 6H5.43112C6.37033 6 6.83994 6 7.2662 6.12945C7.64357 6.24406 7.99464 6.43194 8.29933 6.68236C8.64349 6.96523 8.90398 7.35597 9.42496 8.13744L9.66667 8.5"
                  className="stroke-gray-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="bg-[#ffffff0a] p-2 rounded-lg  hover:bg-[#ffffff13] duration-300"
              title="Go to bookmark"
              onClick={() => handleGotoQuestion(bookmarked)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
                  className="stroke-gray-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {questions.map((e, i) => (
        <QuestionCollapse
          handleBookmark={handleBookmark}
          isBookmarked={bookmarked === e.number ? true : false}
          number={e.number}
          question={e.question}
          options={e.options}
          answers={e.answers}
          key={i}
          parentCollapse={parentCollapse}
          type={e.type}
        />
      ))}
    </div>
  );
}

export default App;
