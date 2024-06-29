const dummyApiResponse = {
  showAccordian: false,
  showCustomTabs: false,
  showImageSlider: false,
  showLightDarkMode: true,
  showLoadMoreData: false,
  showQRCodeGenerator: false,
  showRandomColor: false,
  showScrollIndicator: false,
  showStarRating: false,
  showModalTest: false,
  showTreeView: false,
  showGithubProfileFinder: false,
  showSearchAutoCompleteWithAPi: false,
  showTikTactToe: true,
};

export const fetchFeatureFlags = async () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (dummyApiResponse) resolve({ data: dummyApiResponse });
      else reject({ error: "error fetching dummy data" });
    }, 100),
  );
};
