import axios from "axios";

export async function getQuiz(group: string, topic: string, subTopic: string) {
  const url = "http://127.0.0.1:5000/getQuiz";
  const request = {
    group: group,
    topic: topic,
    subTopic: subTopic,
  };
  const response = await axios({
    method: "post",
    url: url,
    data: request,
  }).finally();
  return response.data;
}

// Need this so that we dont get a typescript explicit any error when trying to directly call getQuiz();
export async function fetchQuiz(
  group: string,
  topic: string,
  subTopic: string
) {
  const response = await getQuiz(group, topic, subTopic);
  // console.log(response.questions[0].options[1]);
  console.log(response);
  return response;
}

// getQuiz("african", "famous people", "MLK").then((response) =>
//   console.log(response.questions[0].options[1])
// );
