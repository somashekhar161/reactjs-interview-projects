import React, { useEffect, useRef, useState } from "react";
import Accordian from "./components/accordian";
import CustomTabs from "./components/custom-tabs/tab-test";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TreeView from "./components/tree-view";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoCompleteWithAPi from "./components/search-autocomplete-with-api";
import TikTactToe from "./components/tic-tact-toe";
import { useFeatureFlag } from "./context/featureFlagContextProvider";
import { fetchFeatureFlags } from "./api/featureFlags";
import { FaSpinner } from "react-icons/fa";
import CustomizeFeatures from "./components/customize-features";
import UseFetchHookTest from "./components/use-fetch/Test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
// import "./app.css";
function App() {
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const [IsLoading, setIsLoading] = useState(false);
  const pageNumber = Math.floor(Math.random() * 10);
  const { FeatureFlags, handleLoadFeatureFlags, handleUpdateFeatureFlags } =
    useFeatureFlag();

  const handleScrollToTop = () => {
    // console.log("should scroll to top", window.scrollTo);
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleFetchFeatureFlags = async () => {
    setIsLoading(true);

    const res = await fetchFeatureFlags();
    if (res.error) {
      console.log(res.error);
      return;
    } else {
      handleLoadFeatureFlags({ data: res.data });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchFeatureFlags();
  }, []);

  const componentsToRender = [
    { key: "showAccordian", component: <Accordian /> },
    { key: "showCustomTabs", component: <CustomTabs /> },
    {
      key: "showImageSlider",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list/"}
          page={pageNumber > 0 ? pageNumber : 1}
        />
      ),
    },
    { key: "showLightDarkMode", component: <LightDarkMode /> },
    { key: "showLoadMoreData", component: <LoadMoreData /> },
    { key: "showQRCodeGenerator", component: <QRCodeGenerator /> },
    { key: "showRandomColor", component: <RandomColor /> },
    {
      key: "showScrollIndicator",
      component: (
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      ),
    },
    { key: "showStarRating", component: <StarRating NoofStarts={5} /> },
    { key: "showModalTest", component: <ModalTest /> },
    { key: "showTreeView", component: <TreeView /> },
    { key: "showGithubProfileFinder", component: <GithubProfileFinder /> },
    {
      key: "showSearchAutoCompleteWithAPi",
      component: <SearchAutoCompleteWithAPi />,
    },
  ];

  if (IsLoading)
    return (
      <div className="  h-svh  ">
        <div className=" flex size-full items-center justify-center bg-black bg-opacity-50">
          <div className=" flex   flex-col items-center justify-center gap-4 rounded bg-gray-200  p-8 text-3xl font-semibold">
            <FaSpinner className="animate-spin   text-6xl" />
            <div>Loading... Please Wait</div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="h-svh snap-y  snap-mandatory  overflow-y-scroll scroll-smooth">
      <div className="relative">
        <button
          ref={topRef}
          onClick={handleScrollToBottom}
          className="absolute right-1/2 top-5 translate-x-1/2 rounded-full bg-gray-50 p-4 shadow-lg shadow-black"
        >
          Scroll To Bottom
        </button>
      </div>
      {componentsToRender.map((componentItem) =>
        FeatureFlags[componentItem.key] ? (
          <div key={componentItem.key} className="snap-start snap-always">
            {componentItem.component}
          </div>
        ) : null,
      )}
      <div className="snap-start snap-always">
        <TikTactToe />
      </div>
      <div className="snap-start snap-always">
        <UseFetchHookTest />
      </div>
      <div className="snap-start snap-always">
        <UseOnClickOutsideTest />
      </div>
      <div className="snap-start snap-always">
        <UseWindowResizeTest />
      </div>
      <div className=" h-svh snap-start snap-always bg-gray-900 p-20  text-center text-6xl text-white">
        Thank You
      </div>
      <div ref={bottomRef} className="bottom-ref"></div>
      <div className="relative">
        <button
          onClick={handleScrollToTop}
          className="absolute bottom-5 right-1/2 translate-x-1/2 rounded-full bg-gray-50 p-4 shadow-lg shadow-black"
        >
          Scroll To Top
        </button>
      </div>
      <CustomizeFeatures />
    </div>
  );
}

export default App;
