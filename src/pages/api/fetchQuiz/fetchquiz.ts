import axios from "axios";

export async function getQuiz(group: string, topic: string, subtopic: string) {
  const url = "http://127.0.0.1:5000/getQuiz";
  const request = {
    group: group,
    topic: topic,
    subtopic: subtopic,
  };
  try {
    const response = await axios({
      method: "post",
      url: url,
      data: request,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching quiz:", error);
    throw error;
  }
}
