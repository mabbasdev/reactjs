import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './components/CSS';
import Card from './components/Card';

const App = () => {
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

  
    // useEffect.
    useEffect(() => {
      getData(1);
    }, []);
  

  // Manual load / refresh handler
  // const handleRefreshOrLoad = () => {
  //   // If we already have data, refresh the current page. Otherwise, load page 1.
  //   getData(data.length > 0 ? page : 1);
  // };

  const handleNext = () => getData(page + 1);
  const handlePrev = () => page > 1 && getData(page - 1);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Header */}
      <header className="text-center py-12 px-6 bg-white border-b border-slate-200">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-3">
          Visual Canvas
        </h1>
        <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm md:text-base leading-relaxed">
          A curated collection of stunning photography powered by the Picsum API.
        </p>
        
        {/* Conditionally show the Refresh button only when there is active data */}
        {/* {data.length > 0 && (
          <button
            onClick={handleRefreshOrLoad}
            disabled={loading}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95 ${
              loading 
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10'
            }`}
          >
            {loading ? 'Refreshing...' : 'Refresh Current Page'}
          </button>
        )} */}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
            {[...Array(limit)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-pulse">
                <div className="aspect-[3/2] bg-slate-200 w-full" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-2/3" />
                  <div className="h-3 bg-slate-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. Manual Empty State with a call-to-action button */}
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

        {/* Beautiful Responsive Grid */}
        {!loading && data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((elem) => (
              <div 
                key={elem.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <Card elem={elem} />
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && data.length > 0 && (
          <div className="flex items-center justify-between border-t border-slate-200 mt-12 pt-6">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition border border-slate-200 rounded-lg ${
                page === 1
                  ? 'text-slate-300 bg-slate-50 border-slate-100 cursor-not-allowed'
                  : 'text-slate-700 bg-white hover:bg-slate-50 shadow-sm active:scale-95'
              }`}
            >
              ← Previous
            </button>

            <span className="text-sm font-medium text-slate-500">
              Page <strong className="text-slate-900">{page}</strong>
            </span>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition border border-slate-200 rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm active:scale-95"
            >
              Next →
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 bg-white border-t border-slate-200 text-xs text-slate-400">
        <p>© 2026 Visual Canvas. Images from Unsplash via Lorem Picsum.</p>
      </footer>
    </div>
  );
};

// CSS-in-JS Styles with Modern UI details


export default App;