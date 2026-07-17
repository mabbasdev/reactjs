// Home.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 12;

    const getData = async (targetPage) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://picsum.photos/v2/list?page=${targetPage}&limit=${limit}`
            );
            setData(response.data);
            setPage(targetPage);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => getData(page + 1);
    const handlePrev = () => page > 1 && getData(page - 1);

    return (
        <div className="max-w-6xl w-full mx-auto px-6 py-12 flex flex-col justify-center flex-1">
            {/* Loading Skeleton */}
            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
                    {[...Array(limit)].map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-pulse">
                            <div className="aspect-3/2 bg-slate-200 w-full" />
                            <div className="p-5 space-y-3">
                                <div className="h-4 bg-slate-200 rounded w-2/3" />
                                <div className="h-3 bg-slate-200 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && data.length === 0 && (
                <div className="text-center py-16 px-4 bg-white rounded-2xl border-2 border-dashed border-slate-200 max-w-md mx-auto my-auto shadow-sm">
                    <span className="text-5xl mb-4 block">📷</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Gallery is Empty</h3>
                    <p className="text-slate-500 text-sm mb-6">Fetch the latest photography collection to get started.</p>
                    <button
                        onClick={() => getData(1)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                    >
                        Load Gallery
                    </button>
                </div>
            )}

            {/* Grid Content */}
            {!loading && data.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((elem) => (
                        <div key={elem.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                            <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100 relative">
                                <img
                                    src={elem.download_url}
                                    alt={`By ${elem.author}`}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-base font-bold text-slate-900 mb-4 line-clamp-1">{elem.author}</h3>
                                <div className="flex gap-3 mt-auto">
                                    <a href={elem.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-xs font-semibold text-slate-600 border border-slate-200 py-2 rounded-lg hover:bg-slate-50 transition">Source</a>
                                    <a href={elem.download_url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-xs font-semibold text-white bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition">Download</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {!loading && data.length > 0 && (
                <div className="flex items-center justify-between border-t border-slate-200 mt-12 pt-6">
                    <button onClick={handlePrev} disabled={page === 1} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-slate-200 rounded-lg text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50">← Prev</button>
                    <span className="text-sm font-medium text-slate-500">Page <strong className="text-slate-900">{page}</strong></span>
                    <button onClick={handleNext} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-slate-200 rounded-lg text-slate-700 bg-white hover:bg-slate-50">Next →</button>
                </div>
            )}
        </div>
    );
};

export default Home;