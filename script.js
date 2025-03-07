document.addEventListener("DOMContentLoaded", function () {
    const resultList = document.getElementById("result-list");
    if (resultList) {
        loadResults();
    }
});

function loadResults() {
    const results = JSON.parse(localStorage.getItem("examResults")) || [];
    const resultList = document.getElementById("result-list");
    resultList.innerHTML = "";
    
    results.forEach(number => {
        const li = document.createElement("li");
        li.textContent = number;
        resultList.appendChild(li);
    });
}

function registerNumber() {
    const examNumber = document.getElementById("exam-number").value;
    const result = document.getElementById("result").value;

    if (!examNumber) {
        alert("受験番号を入力してください");
        return;
    }

    if (result === "pass") {
        const results = JSON.parse(localStorage.getItem("examResults")) || [];
        
        // ランダムな合格者番号を追加（1000〜9999）
        for (let i = 0; i < 5; i++) {
            results.push(String(Math.floor(Math.random() * 9000) + 1000));
        }
        
        results.push(examNumber);
        localStorage.setItem("examResults", JSON.stringify(results));
    }

    window.location.href = "index.html";
}
