import "./Button.css";

export function NoButton({ text }: { text: string }) {
    return <a className="btn btn-5 noBtn">{text}</a>
}

export function YesButton({ text }: { text: string }) {
    return <a className="btn btn-5 yesBtn">{text}</a>
}
