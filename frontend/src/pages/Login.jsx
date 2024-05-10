import Forms from "../components/Forms";

export default function Login() {
    return (
        <div className="max-w-full">
            <Forms route="/api/token/" method="login" />
        </div>

    );
}