import { React } from "deps.ts";

const styles: Record<string, React.CSSProperties> = {
  error: {
    color: "var(--alert)",
    backgroundColor: "var(--backgroundAlert)",
    padding: 24,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "var(--alert)",
    borderStyle: "solid",
  },
  pageContainer: {
    background:
      "linear-gradient(to bottom, var(--background) 30%, transparent), linear-gradient(to right, rgb(24, 207, 219), rgb(228, 120, 228))",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "DM Sans",
    padding: 40,
  },
  logo: {
    width: "max(200px, 20vw)",
    height: 100,
  },
};

type Props = React.PropsWithChildren<{
  error?: Error;
}>;

export function ErrorPage({ error }: Props) {
  return (
    <div style={styles.pageContainer}>
      <div className="logo" style={styles.logo}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 601 74"
          xmlSpace="preserve"
        >
          <path
            fill="rgb(34, 217, 229)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M291.986 66.0484C308.029 66.0484 321.034 53.043 321.034 37C321.034 20.957 308.029 7.95159 291.986 7.95159C275.943 7.95159 262.937 20.957 262.937 37C262.937 53.043 275.943 66.0484 291.986 66.0484ZM291.986 73.0601C311.901 73.0601 328.046 56.9154 328.046 37C328.046 17.0846 311.901 0.939899 291.986 0.939899C272.07 0.939899 255.926 17.0846 255.926 37C255.926 56.9154 272.07 73.0601 291.986 73.0601ZM334.056 46.7273C334.056 62.5868 343.336 73.0601 360.099 73.0601C376.663 73.0601 386.143 62.3873 386.143 46.6275V1.94157H378.16V46.5278C378.16 58.198 371.874 65.5792 360.099 65.5792C348.325 65.5792 342.138 58.198 342.138 46.6275V1.94157H334.056V46.7273ZM392.153 1.94157H400.311L439.187 57.7346V1.94157H447.245V72.0584H439.187L400.311 16.4658V72.0584H392.153V1.94157ZM453.255 72.0584H467.706C491.191 72.0584 505.341 60.2387 505.341 37C505.341 15.0634 491.692 1.94157 467.706 1.94157H453.255V72.0584ZM469.312 64.8464H461.384V9.25376H469.312C486.173 9.25376 497.012 19.4708 497.012 37C497.012 55.3305 486.173 64.8464 469.312 64.8464ZM519.501 72.0584H511.351V1.94157H529.261C543.649 1.94157 551.195 9.15359 551.195 21.374C551.195 29.6878 547.069 37.3005 538.92 39.9048L556.427 72.0584H547.371L531.474 41.6077H519.501V72.0584ZM519.501 34.4958H529.261C537.511 34.4958 542.642 30.6895 542.642 21.4741C542.642 14.0618 538.718 9.15359 528.758 9.15359H519.501V34.4958ZM570.982 72.0584V39.2037L549.415 1.94157H558.658L574.957 31.4908L591.555 1.94157H600.5L578.933 39.2037V72.0584H570.982ZM220.867 1.94157V72.0584H228.932V40.7062H250.836V33.394H228.932V9.35392H253.922V1.94157H220.867Z"
          />
          <path
            fill="rgb(255, 215, 0)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M97.9384 1.44921V31.2279H113.349L88.7326 72.6285C89.7608 72.7163 90.8013 72.761 91.8523 72.761C111.768 72.761 127.912 56.6833 127.912 36.8505C127.912 19.0833 114.956 4.32974 97.9384 1.44921ZM96.6012 1.24854L70.792 44.6556H86.2024V72.3228C68.9709 69.6226 55.7922 54.7692 55.7922 36.8505C55.7922 17.0176 71.9368 0.939899 91.8523 0.939899C93.4621 0.939899 95.0472 1.04495 96.6012 1.24854ZM133.722 1.94157V72.0584H173.789V54.6294H153.655V1.94157H133.722ZM180.188 19.3706V72.0584H200.244V19.3706H214.857V1.94157H165.775V19.3706H180.188ZM0.5 1.94157V72.0584H28.1461C42.1695 72.0584 53.5885 65.5476 53.5885 50.823C53.5885 44.0117 50.5835 38.3022 43.8723 35.2972C48.7805 31.9917 51.3848 27.384 51.3848 20.9733C51.3848 8.75292 42.3698 1.94157 27.6452 1.94157H0.5ZM26.1427 28.4858H20.3331V18.5693H25.9424C29.3481 18.5693 31.0509 20.5726 31.0509 23.3773C31.0509 26.2821 29.3481 28.4858 26.1427 28.4858ZM27.4449 55.3306H20.3331V44.0117H27.7454C31.2513 44.0117 33.1544 46.8164 33.1544 49.621C33.1544 52.3255 31.0509 55.3306 27.4449 55.3306Z"
          />
        </svg>
      </div>
      <h1>Oh no! Something went wrong!</h1>
      <p>We've logged the error.</p>
      <div style={styles.error}>{error?.message}</div>
      <p>
        Try refreshing the page, or go back to <a href="/">Home</a>.
      </p>
    </div>
  );
}
