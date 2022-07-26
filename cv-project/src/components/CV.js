import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function CV(props) {
  return (
    <div class="mt-3">
      <div class="border-black border-2 p-3">
        <div className="cv" id="capture">
          <div
            className="personalDetai"
            class="flex flex-col bg-slate-300 h-500 h-20 justify-center align-center m-3"
          >
            <div class="flex flex-row justify-center align-center text-4xl ">
              <p>{props.name} </p>
            </div>
            <div class="flex flex-row justify-center align-center gap-5">
              <h3>{props.email}</h3>

              <h3>{props.number}</h3>
              <h3>{props.location}</h3>
            </div>
          </div>

          <div class="mt-5">
            <h2 class="mb-2 text-lg">Summary</h2>
            <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
          </div>

          <div className="summary">
            <p> {props.summary} </p>
          </div>

          <div class="mt-5">
            <h2 class="mb-2 text-lg">Education</h2>
            <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
          </div>

          <div className="Education" class="grid grid-cols-3 grid-rows-1 mb-5">
            {props.education.map((x) => (
              <>
                <div className="right" class="flex flex-col mb-3">
                  <h3 class="text-lg">{x.school}</h3>
                  <h3 class="">{x.course}</h3>
                </div>
                <div
                  className="left"
                  class="flex gap-3 justify-end col-start-3 pl-2"
                >
                  <p class="italic">{x.startDate} - </p>
                  <p class="italic">{x.endDate}</p>
                </div>
              </>
            ))}
          </div>

          <div class="mt-5">
            <h2 class="mb-2 text-lg">Work Experience</h2>
            <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
          </div>
          <div class="grid grid-cols-3 grid-rows-1 mb-5">
            {props.work.map((x) => (
              <>
                <div className="right" class="flex flex-col">
                  <h1 class="text-lg">{x.jobRole}</h1>
                  <h3 class="text-lg">{x.workPlace}</h3>
                  <h3 class="text-sm">{x.summary}</h3>
                </div>
                <div
                  className="left"
                  class="flex gap-3 justify-end col-start-3 pl-2"
                >
                  <p class="italic">{x.workStart} - </p>
                  <p class="italic">{x.workEnd}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div class="flex justify-center ">
        <button
          onClick={() => saveCanvas()}
          class=" hover:border-slate-700 mb-4 mt-3 border-solid rounded-md border-2 w-[22rem]"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

function saveCanvas() {
  html2canvas(document.querySelector("#capture"), {
    logging: true,
    letterRendering: 1,
    useCORS: true,
  }).then((canvas) => {
    let cv = document.querySelector("#capture");
    let img = canvas.toDataURL("image/png");
    let imgWidth = 208;
    console.log(canvas);
    console.log(canvas.height);
    console.log(canvas.width);
    let calc = (canvas.height * imgWidth) / canvas.width;
    let imgHeight = Math.floor(calc);
    console.log(imgHeight);
    let doc = new jsPDF("p", "mm", "a4");
    doc.addImage(img, "PNG", 2, 0, imgWidth, imgHeight, "a", "NONE");
    doc.save("CV");
  });
}

export default CV;
