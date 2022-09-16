import { useRouter } from 'next/router'

export const ResultsSummary = ({ count }) => {
    const router = useRouter();
    const { categories, color } = router.query;

    return (
        <div>
            <p className="text-slate-600 text-center">{`Showing ${count} product results`}</p>
        </div>
    )
}