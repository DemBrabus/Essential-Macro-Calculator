import TimelineMax from 'gsap';


const Run = () => {
//App Functionality



const CalculateCalories = () => {
    const Fats = document.getElementById('FatsInput');
    const Carbs = document.getElementById('CarbsInput');
    const Protein = document.getElementById('ProteinInput');
    const InputForm = document.getElementById('FormContainer');
    const Results = document.getElementById('ResultsContainer');
    const ResultsValue = document.getElementById('ResultsValue');
    //InputValues
    let FatsValue = Fats.value;
    let CarbsValue = Carbs.value;
    let ProteinValue = Protein.value;
    //CaloricValues
    const FatsCalories = FatsValue*4;
    const CarbsCalories = CarbsValue*9;
    const ProteinCalories = ProteinValue*4;
    const TotalCalories = FatsCalories+CarbsCalories+ProteinCalories;
    InputForm.classList.add('HideContainer');
    Results.classList.add('ShowContainer');
    ResultsValue.innerHTML = TotalCalories;
}


const RestartCalculator = () => {
    const InputContainer = document.getElementById('FormContainer');
    const Results = document.getElementById('ResultsContainer');
    const ResultsValue = document.getElementById('ResultsValue');
    const InputForm = document.getElementById('Form');
        InputForm.reset();
    InputContainer.classList.remove('HideContainer');
    Results.classList.remove('ShowContainer');
    ResultsValue.innerHTML = '';
}



const EditCalculator = () => {
    const InputContainer = document.getElementById('FormContainer');
    const Results = document.getElementById('ResultsContainer');
    const ResultsValue = document.getElementById('ResultsValue');
    InputContainer.classList.remove('HideContainer');
    Results.classList.remove('ShowContainer');
    ResultsValue.innerHTML = '';
}

const SubmitBtn = document.getElementById('FormSubmit');
    SubmitBtn.addEventListener('click', CalculateCalories);

const RedoBtn = document.getElementById('RedoButton');
    RedoBtn.addEventListener('click', RestartCalculator);

const EditBtn = document.getElementById('EditButton');
    EditBtn.addEventListener('click', EditCalculator);




//Styling
const SubmitBtnClick = () => {
    SubmitBtn.classList.add('SubmitPress');
}

const SubmitBtnUnclick = () => {
    SubmitBtn.classList.remove('SubmitPress');
}
    SubmitBtn.addEventListener('mousedown', SubmitBtnClick);
    SubmitBtn.addEventListener('mouseup', SubmitBtnUnclick);





}



export default Run;









