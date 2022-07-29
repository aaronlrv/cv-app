import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function CV(props) {
  return (
    <div className="cv" id="capture">
      <div
        className="personalDetai"
        class="flex flex-col bg-slate-300 h-500 h-20 justify-center align-center m-3"
      >
        <div class="flex flex-row justify-center align-center text-3xl underline">
          <p>{props.name} </p>
        </div>
        <div class="flex flex-row justify-center align-center gap-5">
          <h3>{props.email}</h3>

          <h3>{props.number}</h3>
          <h3>{props.location}</h3>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="">Summary</h2>
        <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
      </div>

      <div className="summary">
        <p> {props.summary} </p>
      </div>

      <div class="mt-5">
        <h2 class="">Education</h2>
        <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
      </div>

      <div className="Education" class="grid grid-cols-3 grid-rows-1 mb-5">
        {props.education.map((x) => (
          <>
            <div className="right" class="flex flex-col">
              <h3 class="bg-red-500">{x.school}</h3>
              <h3 class="bg-red-700">{x.course}</h3>
            </div>
            <div
              className="left"
              class="flex gap-3 justify-end col-start-3 pl-2"
            >
              <p class="bg-green-400">{x.startDate} - </p>
              <p class="bg-green-700">{x.endDate}</p>
            </div>
          </>
        ))}
      </div>

      <div class="mt-5">
        <h2 class="">Work Experience</h2>
        <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
      </div>
      <div class="grid grid-cols-3 grid-rows-1 mb-5">
        {props.work.map((x) => (
          <>
            <div className="right" class="flex flex-col">
              <h1>{x.jobRole}</h1>
              <h3>{x.workPlace}</h3>
              <h3>{x.summary}</h3>
            </div>
            <div
              className="left"
              class="flex gap-3 justify-end col-start-3 pl-2"
            >
              <p>{x.workStart} - </p>
              <p>{x.workEnd}</p>
            </div>
          </>
        ))}
      </div>
      <button onClick={() => saveCanvas()}>Save Canvas</button>
    </div>
  );
}

function saveCanvas() {
  html2canvas(document.querySelector("#capture"), {
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    let cv = document.querySelector("#capture");
    let img = canvas.toDataURL("image/png");

    console.log(canvas);
    console.log(canvas.json);

    cv.appendChild(canvas);

    let doc = new jsPDF();
    doc.setFont("Arial");
    doc.getFontSize(11);
    doc.addImage(img, "PNG", 0, 0, 1920, 1080);
    doc.save();
  });
}

export default CV;
