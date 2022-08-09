export const ResultsSummary = ({ count }) => {
    return (
        <div>
            <p className="text-slate-600 text-center">{`Showing ${count} product results`}</p>
        </div>
    )
}