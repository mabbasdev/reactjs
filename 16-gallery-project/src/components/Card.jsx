import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100 relative">
                <img
                    src={props.elem.download_url}
                    alt={`By ${props.elem.author}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        ID: {props.elem.id}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                        {props.elem.width} × {props.elem.height}
                    </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-4 line-clamp-1">
                    {props.elem.author}
                </h3>

                <div className="flex gap-3 mt-auto">
                    <a
                        href={props.elem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs font-semibold text-slate-600 border border-slate-200 py-2.5 rounded-lg hover:bg-slate-50 transition"
                    >
                        Source
                    </a>
                    <a
                        href={props.elem.download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs font-semibold text-white bg-blue-600 py-2.5 rounded-lg hover:bg-blue-700 transition"
                    >
                        Download
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card
