import { Channels, MessageCountList } from "./static/interface";
import "./App.css";

class EngagementHelper {
  static engagementMessageOverTimeChartOptions(
    messageCountList: MessageCountList[],
    channels: Channels[]
  ) {
    const seriesVal = messageCountList
      .filter((item) => Number(item.count) > 1)
      .map((obj) => Number(obj.count));

    const dates = messageCountList
      .filter((m) => Number(m.count) > 1)
      .map((i) => i.timeBucket?.split("T")[0]);

    const option = {
      title: {
        text: "Mercle Frontend Assignment -Ashish",
        style: {
          color: "#FFF",
        },
      },

      chart: {
        backgroundColor: "#22222C",
        style: {
          color: "#FFF",
        },
      },
      yAxis: {
        title: {
          text: "Number of Messages",
          style: {
            color: "#FFF",
          },
        },
        gridLineColor: "transparent",
        labels: {
          style: {
            color: "white",
          },
        },
      },
      xAxis: {
        categories: dates,
        labels: {
          style: {
            color: "white",
          },
        },
      },
      tooltip: {
        useHTML: true,
        pointFormat: `<b> Message : {point.y}   </b>`,
        backgroundColor: "black",
        style: {
          color: "#FFF",
        },
      },
      series: [
        {
          type: "line",
          data: seriesVal,
        },
      ],
      legend: {
        itemStyle: {
          color: "#FFF",
          display: `none`,
        },
      },
      plotOptions: {
        series: {
          color: "#008f8d",
          animation: {
            duration: 4000,
          },
        },
      },
    };

    return option;
  }
}

export default EngagementHelper;
