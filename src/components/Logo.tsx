export interface LogoColors {
    flameBaseColor: string;
    flameTipColor: string;
    letterColor: string;
    backgroundColor: string;
}

export const DEFAULT_COLORS: LogoColors = {
    flameBaseColor: "#de7721",
    flameTipColor: "#f5ea54",
    letterColor: "#c83737",
    backgroundColor: "#000000",
};

export const Logo = (props: LogoColors) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            width={380.578}
            height={279.623}
            viewBox="0 0 100.695 73.984"
        >
            <defs>
                <linearGradient id="b">
                    <stop
                        offset={0}
                        style={{
                            stopColor: props.flameBaseColor,
                            stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset={1}
                        style={{
                            stopColor: props.flameTipColor,
                            stopOpacity: 1,
                        }}
                    />
                </linearGradient>
                <linearGradient id="a">
                    <stop
                        offset={0}
                        style={{
                            stopColor: props.flameBaseColor,
                            stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset={1}
                        style={{
                            stopColor: props.flameTipColor,
                            stopOpacity: 1,
                        }}
                    />
                </linearGradient>
                <linearGradient
                    xlinkHref="#a"
                    id="c"
                    x1={166.526}
                    x2={166.526}
                    y1={233.076}
                    y2={220.109}
                    gradientUnits="userSpaceOnUse"
                />
                <linearGradient
                    xlinkHref="#b"
                    id="d"
                    x1={159.717}
                    x2={159.717}
                    y1={193.507}
                    y2={176.702}
                    gradientUnits="userSpaceOnUse"
                />
            </defs>
            <g
                style={{
                    display: "inline",
                }}
            >
                <path
                    d="M186.46 174.963h-53.421L109.402 198.6l50.347 50.347 50.348-50.347z"
                    style={{
                        display: "inline",
                        fill: props.backgroundColor,
                        fillOpacity: 1,
                        strokeWidth: 0.195878,
                    }}
                    transform="translate(-109.402 -174.963)"
                />
                <path
                    d="M168.45 221.23c-3.389-.022-4.16 11.076-4.16 11.076h4.526s-2.432-6.582-.03-11.037a1.655 1.655 0 0 0-.336-.038zm-15.089 5.37c.584 3.266-1.577 3.399-2.713 5.706h4.546s.305-5.581-1.833-5.706z"
                    style={{
                        fill: "url(#c)",
                        fillOpacity: 1,
                        strokeWidth: 0.252787,
                    }}
                    transform="translate(-109.402 -174.963)"
                />
                <path
                    d="M167.817 177.165a.869.869 0 0 0-.175.01s2.377 3.028-10.697 4.687c-4.244.673-7.75 3.318-7.607 5.909.142 2.591-2.072 5.162-2.072 5.162h11.886s-3.992-4.74 4.347-7.166c1.22-.302 4.625-1.194 5.536-5.196.431-3.068-.757-3.392-1.218-3.406zm-22.124 6.22s2.523 4.071-3.023 4.62c-5.002-.064-6.724 5.026-6.724 5.026h7.2s-.262-2.229 3.26-3.804c3.521-1.575-.713-5.841-.713-5.841zm30.639 2.551c3.017 3.607.76 5.689-.67 6.547-3.978-1.659 3.165-6.17-7.255-6.522 5.913 4.749-4.874 7.012-4.874 7.012h13.451l6.504.072s-.62-5.291-7.156-7.109z"
                    style={{
                        fill: "url(#d)",
                        fillOpacity: 1,
                        strokeWidth: 0.264583,
                    }}
                    transform="translate(-109.402 -174.963)"
                />
                <g
                    style={{
                        fill: props.letterColor,
                        fillOpacity: 1,
                    }}
                >
                    <path
                        d="M182.647 318.197v-26.718l-4.46 13.402h-14.75v-55.714h4.59l-9.153-15.855-9.154 15.855h4.591v55.714h-14.75l-4.46-13.402v26.717z"
                        style={{
                            fill: props.letterColor,
                            fillOpacity: 1,
                            strokeWidth: 0.264583,
                        }}
                        transform="matrix(-1 0 0 -.56986 209.221 199.287)"
                    />
                </g>
            </g>
        </svg>
    );
};
