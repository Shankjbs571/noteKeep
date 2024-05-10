import Forms from "../components/Forms";

export default function Register(){
    return (
        <div className="max-w-full">
            <Forms route="/api/user/register/" method="register" />
        </div>
    );
}