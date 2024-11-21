import * as d3 from "d3";
import {useMemo} from "react"; // we will need d3.js

type HistogramProps = {
    width: number;
    height: number;
    data: number[];
};

export const Histogram = ({ width, height }: HistogramProps) => {
    const data = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9];
    const bucketGenerator = d3
        .bin()
        .value((d) => d)
        .domain([0, 10])
        .thresholds([0, 2, 4, 6, 8, 10]);

    const buckets = bucketGenerator(data);

    const yScale = useMemo(() => {

        const max = Math.max(...buckets.map((bucket) => bucket?.length));

        return d3.scaleLinear()
            .range([height, 0])
            .domain([0, max]);

    }, [data, height]);
    const xScale = d3
        .scaleLinear()
        .domain([0, 10])
        .range([0, width]);

    const allRects = buckets.map((bucket, i) => {
        return (
            <rect
                key={i}
                fill="#69b3a2"
                stroke="black"
                x={xScale(bucket.x0 || 0)}
                width={xScale(bucket.x1 || 0) - xScale(bucket.x0 || 0)}
                y={yScale(bucket.length)}
                height={height - yScale(bucket.length)}
            />
        );
    });
    return (
        <div>
            <svg width={width} height={height}>
                { allRects }
            </svg>
        </div>
    );
};