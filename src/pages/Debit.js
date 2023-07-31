import MoneyMattersForm1 from "../components/MoneyMattersForm1";
import DashboardForm from "../components/DashboardForm";
import TransactionFormContainer1 from "../components/TransactionFormContainer1";
import TransactionForm from "../components/TransactionForm";
import "./Debit.css";
const Debit = () => {
  return (
    <div className="debit1">
      <div className="debit-child" />
      <MoneyMattersForm1 />
      <DashboardForm />
      <TransactionFormContainer1 />
      <TransactionForm
        dimensionCode="/group-731.svg"
        priceChange="+$2,500"
        dimensionLabel="/pencil021.svg"
        dimensionValue="/trash011.svg"
        imageDimensionCode="/group-731.svg"
        priceChangeLabel="+$150"
        dimensionCodeImageUrl="/pencil022.svg"
        dimensionCodeImageUrl2="/group-731.svg"
        priceChangeAmount="+$1050"
        dimensionCodeImageUrl3="/pencil022.svg"
        dimensionCodeImageUrl4="/group-731.svg"
        priceChangeText="+$840"
        dimensionCodeImageUrl5="/pencil022.svg"
        dimensionCodeImageUrl6="/group-731.svg"
        priceChangeValue="+$840"
        dimensionCodeImageUrl7="/pencil022.svg"
      />
    </div>
  );
};

export default Debit;
