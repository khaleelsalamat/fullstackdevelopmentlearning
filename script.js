import { GoogleGenAI } from '@google/genai';
const mainPage = document.getElementById('main-page');
const loadingPage = document.getElementById('loading-page');
const reportPage = document.getElementById('report-page');
const  input_data=document.getElementById('user_input');
const  report=document.getElementById('reportbtn');
const  answer=document.getElementById('reportdata');
const backBtn = document.getElementById('backbtn');
const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});
function showScreen(screenToShow) {
  mainPage.classList.add('hidden');
  loadingPage.classList.add('hidden');
  reportPage.classList.add('hidden');

  screenToShow.classList.remove('hidden');
}
report.addEventListener('click',async(e) =>{
    e.preventDefault();
    const ticker = input_data.value.trim();
  if (ticker) {
    showScreen(loadingPage);
    await makeCall(ticker);
  }
});
backBtn.addEventListener('click', () => {
  input_data.value = '';   
  showScreen(mainPage);    
});
async function makeCall(ticker) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents:[
      { role: 'user', parts: [{ text: 'AAPL' }] },
      { role: 'model', parts: [{ text: '[BUY] AAPL: Strong balance sheet and continuous tech leadership.' }] }
      ,
        { role: 'user', parts: [{ text: 'TSLA' }] },
        { role: 'model', parts: [{ text: '[HOLD] TSLA: High volatility with significant market fluctuations.' }] },
       {role:'user',parts:[{text:`${ticker}`}] }
      ],
      config:{
        temperature: 0.9,
        systemInstruction:'you are advance stock analytic and very sharp man ' 
      }
        });
        showScreen(reportPage);
        answer.textContent=response.text
  } 
  catch (error) {
    console.error("API Call Failed:", error);
    answer.textContent='Failed to fetch stock analysis. Please check console.';
    showScreen(reportPage);
  }
}

