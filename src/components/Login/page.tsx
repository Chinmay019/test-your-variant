"use client";

import { useRouter } from "next/navigation"

const LoginPage = () => {
    const router = useRouter();
    const style = {
        margin: "auto",
        display: "flex",
        "alignItems": "center",
    }
    return (
        <div style={ style }>
            <button type="submit" className="btn btn-primary" onClick={ () => router.push('/home') }>Login</button>
        </div>
    )
}

export default LoginPage;