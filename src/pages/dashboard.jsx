import InputAsk from "../components/Elements/Label";
import CardPost from "../components/Fragments/CardPost";

const Dashboard = () => {
    return (
        <div>
            <div>
                <InputAsk />
            </div>
            <div className="mt-2">
                <CardPost />
            </div>
        </div>
    );
}

export default Dashboard;