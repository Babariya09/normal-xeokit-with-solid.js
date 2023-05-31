import "./style/bim-viewer-style.css";
import { createSignal } from 'solid-js';

function BimViewr() {

    const iframeBaseURL = "./../app/index.html?projectId=Systhema&modelId=170133_Asvest_20200131";
  const [objectIdsUsed, setObjectIdsUsed] = createSignal({});

  function selectObject(checkbox) {
    const objectId = checkbox.name;

    setObjectIdsUsed((prevObjectIdsUsed) => {
      const updatedObjectIdsUsed = { ...prevObjectIdsUsed };

      if (checkbox.checked) {
        updatedObjectIdsUsed[objectId] = true;
      } else {
        delete updatedObjectIdsUsed[objectId];
      }

      return updatedObjectIdsUsed;
    });

    const objectIds = Object.keys(objectIdsUsed());

    if (objectIds.length === 0) {
      window.location.href = iframeBaseURL + "#actions=clearFocusObjects";
    } else {
      const objectIdsParam = objectIds.join(",");
      window.location.href = iframeBaseURL + "#actions=focusObjects,openTab&objectIds=" + objectIdsParam + "&tabId=objects";
    }
  }

  return (
    <div>
    <div>
      <ul>
        <li>
          <label>
            <input type="checkbox" name="0FazZzVxL0ZAC2Xz9Lc_VS" onclick={selectObject} />
            Focus object "0FazZzVxL0ZAC2Xz9Lc_VS"
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="12NjfiY$5BWxO3cGvRvhMM" onclick={selectObject} />
            Focus object "12NjfiY$5BWxO3cGvRvhMM"
          </label>
        </li>
      </ul>
      <iframe id="embeddedViewer" src={iframeBaseURL}></iframe>
    </div>
    </div>
  );
}

export default BimViewr;
