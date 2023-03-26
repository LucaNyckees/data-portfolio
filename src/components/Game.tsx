import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

function displayGameAnswer() {
  let answer: HTMLElement = document.getElementById(
    "game-answer-display-text"
  ) as HTMLElement;
  let link: HTMLElement = document.getElementById(
    "lattice-link"
  ) as HTMLElement;
  answer.style.color = "white";
  link.style.color = "white";
}

function displayWalk() {
  return;
}

function Game() {
  return (
    <>
      <div className="game-content">
        <div className="game-left">
          <div className="intro-game">
            <h2 style={{ marginBottom: "0px" }}>Question</h2>
            <p>
              Imagine you have a uniform random walk living in{" "}
              <Latex>$Z^2$</Latex>, that is, a random process that, at each
              step, has four possibilities : it can either go left, right, up or
              down and, at each step, each of the four possibilities is realized
              with the same probability (<Latex>$p=1/4$</Latex>). Say our random
              walk starts at the point <Latex>$(0,0)$</Latex>.<br></br>
              <br></br>
              What is the probability that the random walk will return to the
              origin point ?
            </p>
          </div>
          <div className="game-answer">
            <div id="show-game-answer-ensemble">
              <h2>Answer</h2>
              <a
                style={{ marginTop: "-2px" }}
                className="material-symbols-outlined"
                onMouseOver={displayGameAnswer}
              >
                expand_more
              </a>
            </div>
            <div id="game-answer-display">
              <p id="game-answer-display-text" style={{ color: "transparent" }}>
                The following is a result of lattice theory, a domain of
                mathematical physics.<br></br>
                <br></br>THEOREM.<br></br>
                Consider a random walk living in the lattice{" "}
                <Latex>$Z^d$</Latex> and starting at a point{" "}
                <Latex>$(x_1,...,x_d)$</Latex>, where <Latex>$d\in N^*$</Latex>.
                Then, the probability of the random walk going back at least
                once to the point <Latex>$(x_1,...,x_d)$</Latex> is equal to{" "}
                <Latex>$1$</Latex> if <Latex>$d=1,2$</Latex>.<br></br>
                <br></br>
                You can read more about this theorem and other cool results of
                lattice models theory{" "}
                <a
                  id="lattice-link"
                  target="_blank"
                  href="http://www.math.uchicago.edu/~lawler/reu1#:~:text=The%20probability%20that%20a%20(one,to%20the%20origin%20is%20one."
                >
                  here
                </a>{" "}
                (lecture notes from the university of Chicago).
              </p>
            </div>
          </div>
        </div>
        <div className="game-right">
          <div className="viz-game">
            <a
              className="about-btn"
              type="Button"
              style={{ padding: "12px 16px", color: "white" }}
              onClick={displayWalk}
            >
              Random walk visualization
            </a>
            <canvas id="walk" style={{ height: "48vh" }}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
