import React, { useState } from "react";
import { useFeatureFlag } from "../../context/featureFlagContextProvider";
import Modal from "../custom-modal-popup/modal";

const CustomizeFeatures = () => {
  const { FeatureFlags, handleUpdateFeatureFlags } = useFeatureFlag();
  const [isShowModal, setisShowModal] = useState(false);
  const handleToggleModal = () => {
    setisShowModal((prev) => !prev);
  };
  const closeModal = () => {
    setisShowModal(false);
  };
  const handleChangeFlag = (e) => {
    handleUpdateFeatureFlags({ key: e.target.name, value: e.target.checked });
  };

  return (
    <>
      <button
        onClick={handleToggleModal}
        className=" fixed right-10 top-6 h-fit rounded-full bg-slate-400 p-4  font-medium text-black shadow-md shadow-black transition-all active:scale-95  dark:bg-gray-700 dark:text-white  "
      >
        Feature Flag
      </button>
      {isShowModal && (
        <Modal
          onClose={closeModal}
          header={<>Toggle Components</>}
          body={
            <div className=" max-h-svh overflow-auto  bg-gray-600">
              <table className="table-fixed border-separate  border-spacing-2 rounded border border-slate-500 bg-white">
                <thead>
                  <tr>
                    <th className="rounded border border-slate-600 p-2 px-4">
                      Component
                    </th>
                    <th className="rounded border border-slate-600 p-2 px-4">
                      Show
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(FeatureFlags).map((feature) => (
                    <tr key={feature}>
                      <td className="rounded border border-slate-700 px-4 font-semibold">
                        {feature.split("show")[1]}
                      </td>
                      <td className="rounded border border-slate-700   px-4 pt-2">
                        <input
                          type="checkbox"
                          checked={FeatureFlags[feature]}
                          name={feature}
                          onChange={handleChangeFlag}
                          className="size-10  accent-slate-500"
                        ></input>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
          footer={<></>}
        />
      )}
    </>
  );
};

export default CustomizeFeatures;
