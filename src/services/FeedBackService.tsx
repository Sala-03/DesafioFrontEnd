import { IFeedBack } from "interfaces/IFeedBack";
import { ISendFeedBack } from "interfaces/ISendFeedBack"
import { API } from "providers"

const sendFeedBack = (feed: React.FormEvent<HTMLFormElement>) => API.post<IFeedBack>('/api', feed);

const getFeedBack = (feed: IFeedBack) => {
  const response = API.get<IFeedBack[]>('');

  return response;
}

export const FeedBackServices= {
  sendFeedBack,
  getFeedBack,
}

