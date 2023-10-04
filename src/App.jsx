import { useEffect } from "react";
import "./App.css";
import $ from "jquery";
function App() {
  useEffect(() => {
    $(document).keypress((e) => {
      console.log(e.key);
      if (
        e.key >= 0 ||
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/" ||
        e.key == "."
      ) {
        clicked(null, e.key);
      } else if (e.key == "Enter" || e.key == "=") {
        showresult();
      }
    });
  }, []);

  function clicked(e,keypress) {
    let input = $(".screen .inputText");
    let inputText = input.text();
    let clickedValue;
    if (e == null) {
      clickedValue = keypress;
    } else {
      clickedValue = e.target.value;
    }
    if (
      clickedValue == "." &&
      !inputText.charAt(inputText.length - 1).match(/^\d{0,}$/)
    ) {
      input.text(input.text() + "0");
    }
    if (
      clickedValue == "/" ||
      clickedValue == "*" ||
      clickedValue == "-" ||
      clickedValue == "+"
    ) {
      if (inputText.charAt(inputText.length - 1).match(/^\d{0,}$/)) {
        input.text(input.text() + clickedValue);
      } else {
        input.text(inputText.slice(0, -1) + clickedValue);
      }
    } else {
      input.text(input.text() + clickedValue);
      $(".resultText").text(input.text());
    }
    // showresult();
  }
  function showresult() {
    let input = $(".screen .inputText");
    let inputText = input.text();
    let result;
    switch (true) {
      // case inputText.includes("/"):
      //   inputText.split("/").map((num) => {
      //     result += Number(num);
      //   });
      //   break;
      case inputText.includes("/"):
        result =
          Number(inputText.split("/")[0]) / Number(inputText.split("/")[1]);
        break;
      case inputText.includes("*"):
        result =
          Number(inputText.split("*")[0]) * Number(inputText.split("*")[1]);
        break;
      case inputText.includes("-"):
        result =
          Number(inputText.split("-")[0]) - Number(inputText.split("-")[1]);
        break;
      case inputText.includes("+"):
        result =
          Number(inputText.split("+")[0]) + Number(inputText.split("+")[1]);
        break;
    }

    $(".resultText").text(result);
  }
  function clear() {
    $(".resultText").text("0");
    $(".screen .inputText").text("");
  }
  return (
    <main className="vh-100 d-flex align-items-center justify-content-center">
      <div className="frame p-3 pb-1 rounded-2 bg-black text-white">
        <div className="screen">
          <div
            className="inputText text-end fs-6"
            style={{ color: "orange" }}
          ></div>
          <div className="resultText text-end fs-5">0</div>
        </div>
        <div className="calcButtons mt-3">
          <div className="row" style={{ padding: "1px 1px" }}>
            {/*//!First Row (AC,/,*) */}
            <div className="col-6" style={{ paddingInline: "1px" }}>
              <button
                onClick={clear}
                className="btn p-3 rounded-0 calcBtn w-100"
                style={{ backgroundColor: "#ac3838", color: "white" }}
              >
                AC
              </button>
            </div>
            <div className="col-3" style={{ paddingInline: "1px" }}>
              <button
                value={"/"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn opertatorBtn w-100"
              >
                <i className="fa-solid fa-divide"></i>
              </button>
            </div>
            <div className="col-3" style={{ paddingInline: "1px" }}>
              <button
                value={"*"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn opertatorBtn w-100"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            {/*//!Sec Row (7,8,9,-) */}
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"7"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
              >
                7
              </button>
            </div>
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"8"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
              >
                8
              </button>
            </div>
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"9"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
              >
                9
              </button>
            </div>
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"-"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn opertatorBtn w-100"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
            {/*//!Third Row (4,5,6,+) */}
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"4"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
              >
                4
              </button>
            </div>
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"5"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
              >
                5
              </button>
            </div>
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"6"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
              >
                6
              </button>
            </div>
            <div className="col-3" style={{ padding: "1px 1px" }}>
              <button
                value={"+"}
                onClick={(e) => {
                  clicked(e);
                }}
                className="btn p-3 rounded-0 calcBtn opertatorBtn w-100"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            {/*//!Fourth Row (1,2,3,=) */}
            <div className="col">
              <div className="row">
                <div className="col-9">
                  <div className="row">
                    <div className="col-4" style={{ padding: "1px 1px" }}>
                      <button
                        value={"1"}
                        onClick={(e) => {
                          clicked(e);
                        }}
                        className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
                      >
                        1
                      </button>
                    </div>
                    <div className="col-4" style={{ padding: "1px 1px" }}>
                      <button
                        value={"2"}
                        onClick={(e) => {
                          clicked(e);
                        }}
                        className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
                      >
                        2
                      </button>
                    </div>
                    <div className="col-4" style={{ padding: "1px 1px" }}>
                      <button
                        value={"3"}
                        onClick={(e) => {
                          clicked(e);
                        }}
                        className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
                      >
                        3
                      </button>
                    </div>
                    {/*//!Fifth Row (0,.,=) */}
                    <div className="col-8" style={{ padding: "1px 1px" }}>
                      <button
                        value={"0"}
                        onClick={(e) => {
                          clicked(e);
                        }}
                        className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
                      >
                        0
                      </button>
                    </div>
                    <div className="col-4" style={{ padding: "1px 1px" }}>
                      <button
                        value={"."}
                        onClick={(e) => {
                          clicked(e);
                        }}
                        className="btn p-3 rounded-0 calcBtn btnMainColor w-100"
                      >
                        .
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-3" style={{ padding: "1px 1px" }}>
                  <button
                    onClick={showresult}
                    value={"="}
                    style={{ backgroundColor: "#014467" }}
                    className="btn p-3 h-100 rounded-0 calcBtn text-white w-100"
                  >
                    <i className="fa-solid fa-equals"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
