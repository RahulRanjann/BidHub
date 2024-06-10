import Img from "../component/Img";
export default function Test() {
  return (
    <div className="m-10">
      <div className="flex justify-center p-2 rounded-t-2xl bg-slate-600">
        <h1 className="text-2xl font-bold text-white">Test</h1>
      </div>
      <div className="flex justify-center items-center  border-2 border-gray-300 w-full rounded-b-2xl">
        <div className="flex justify-center p-2 rounded-b-2xl bg-slate-600 w-full">
          <table class="table-auto">
            <thead>
              <tr>
                <th>Document</th>
                <th>Upload</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Photo</td>
                <td><Img /></td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
          ​
        </div>
      </div>
    </div>
  );
}
