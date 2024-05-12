export default function Rating({rate, count }) {
    return(
        <>
            <span className="badge bg-primary">
                {count} / {rate}
            </span>
        </>
    )
}