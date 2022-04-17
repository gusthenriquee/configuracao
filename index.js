document.onkeydown = keyboard;
function keyboard(e) {
  if (e.keyCode == 97) {
    document.getElementById("info").innerHTML =
      "Você avaliou o atendimento como pessimo";

    document.getElementById("pessimo").click(simulatef1());
  }

  if (e.keyCode == 98) {
    document.getElementById("info").innerHTML =
      "Você avaliou o atendimento como ruim";

    document.getElementById("ruim").click(simulatef2());
  }

  if (e.keyCode == 99) {
    document.getElementById("info").innerHTML =
      "Você avaliou o atendimento como regular";
    document.getElementById("regular").click(simulatef3());
  }

  if (e.keyCode == 100) {
    document.getElementById("info").innerHTML =
      "Você avaliou o atendimento como bom";
    document.getElementById("bom").click(simulatef4());
  }

  if (e.keyCode === 101) {
    document.getElementById("info").innerHTML =
      "Você avaliou o atendimento como ótimo";
    document.getElementById("otimo").click(simulatef5());
  }
}

function simulatef1(event) {
  window.addEventListener("keydown", (e) => {
    console.log(e);
  });

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "f1",
      keyCode: 112,
      code: "KeyF1",
      which: 112,
      shiftKey: true,
      ctrlKey: true,
      metaKey: false,
    })
  );
}

function simulatef2(event) {
  window.addEventListener("keydown", (e) => {
    console.log(e);
  });

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "f2",
      keyCode: 113,
      code: "KeyF2",
      which: 113,
      shiftKey: true,
      ctrlKey: true,
      metaKey: false,
    })
  );
}

function simulatef3(event) {
  window.addEventListener("keydown", (e) => {
    console.log(e);
  });

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "f3",
      keyCode: 114,
      code: "KeyF3",
      which: 114,
      shiftKey: true,
      ctrlKey: true,
      metaKey: false,
    })
  );
}

function simulatef4(event) {
  window.addEventListener("keydown", (e) => {
    console.log(e);
  });

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "f4",
      keyCode: 115,
      code: "KeyF4",
      which: 115,
      shiftKey: true,
      ctrlKey: true,
      metaKey: false,
    })
  );
}

function simulatef5(event) {
  window.addEventListener("keydown", (e) => {
    console.log(e);
  });

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "f5",
      keyCode: 116,
      code: "KeyF5",
      which: 116,
      shiftKey: true,
      ctrlKey: true,
      metaKey: false,
    })
  );
}
