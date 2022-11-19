import '../css/Header.css';

export default function Header() {
    const goHome = () => {
        window.location.href = "/"
    }

    return (
        <>
            <h1 className="banner" onClick={goHome}>
                📝 Write Your Simple Board !!!
            </h1>
        </>
    )
}