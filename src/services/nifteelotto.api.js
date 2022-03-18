const NifteeLottoAPI = {};
const API_BASE_URL ="http://localhost:1337/";
const authToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1MDA0MzgyLCJleHAiOjE2NDc1OTYzODJ9.8H4A-DD_Tk8POXJbAW0tZqDrnVzi4Bpjtm_pkkRvST0";

NifteeLottoAPI.getNfts = async () => {
  var url = API_BASE_URL + "api/nfts";
  try {
    var result = await NifteeLottoAPI.makeGetRequest(url, authToken);
    console.log(result);
    return result;
  } catch (e) {
    throw e;
  }
};
NifteeLottoAPI.createNft = async (data) => {
  console.log("create nfts");
  var url = API_BASE_URL + "api/nfts";
  try {
    var result = await NifteeLottoAPI.makePOSTRequest(url,data, authToken);
    console.log(result);
    return result;
  } catch (e) {
    throw e;
  }
};

NifteeLottoAPI.makePOSTRequest = async (url, data, authToken) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken
    },
    body:JSON.stringify(data)
  });
  if (response.ok) return await response.json();
  else {
    throw new Error(await response.text());
  }
};


NifteeLottoAPI.makePOSTRequestMultipart = async (url, data, authToken) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + authToken
    },
    body:data
  });
  if (response.ok) return await response.json();
  else {
    throw new Error(await response.text());
  }
};

NifteeLottoAPI.makeGetRequest = async (url,authToken) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken
    },
  });
  if (response.ok) return await response.json();
  else {
    throw new Error(await response.text());
  }
};

export default NifteeLottoAPI;