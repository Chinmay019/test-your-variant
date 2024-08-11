"use client";

import { useRouter } from "next/navigation"

const LoginPage = () => {
    const router = useRouter();
    const style = {
        margin: "auto",
        display: "flex",
        "align-items": "center",
        "justify-content": "center"
    }
    return (
        <div style={ style }>
            <button type="submit" className="btn btn-primary" onClick={ () => router.push('/home') }>Login</button>
        </div>
    )
}

export default LoginPage;