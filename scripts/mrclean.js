module.exports = (robot) => {
  robot.hear(/mrclean/, (msg) => {
    msg.send(':mrclean00::mrclean01::mrclean02:\n:mrclean10::mrclean11::mrclean12:\n:mrclean20::mrclean21::mrclean22:');
  });
};
