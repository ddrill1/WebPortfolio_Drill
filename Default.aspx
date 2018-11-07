<%@ Page Title="" Language="C#" MasterPageFile="~/Drill.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebPortfolio_DDrill.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="space2"></div>
    <div class="container-fluid">
        <div id="myCarousel" class="carousel slide" data-interval="false">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" id="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" id="1"></li>
            <li data-target="#myCarousel" data-slide-to="2" id="2"></li>
            <li data-target="#myCarousel" data-slide-to="3" id="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" id="mainSlide">
                <img id="profilePic" src="Images/profile.jpg" />
                <h2 id="itemOneTitle">Hey folks! My name is Derek Drill</h2>
                <div id="warCelDiv">
                    <br />
                    <br />
                    <br />
                    <img src="Images/wario_celebrate.gif" id="warioCelebrate" />
                </div>
                <br />
                <label id="welcome">Welcome!</label>
                <br />
                <h6 class="info" id="info1"> .NET Developer </h6>
                <h6 class="info" id="info2"> -Since graduating, I've been working as a Programmer for BAE Systems. </h6>
                <h6 class="info" id="info3"> -Developing is my way of artistically expressing myself </h6>
                <h6 class="info" id="info4"> -This purpose of this page is to serve as a pallet to express myself, continue to grow as a developer, and post all relevant projects </h6>
                <br />
                <div id="warioDiv" style="text-align:left">
                    <img src="Images/wario.gif" id="wario" />
                </div>
                <h4 class="info" id="info5">ENJOY!</h4>
                <br />
            </div>
            <div class="carousel-item" id="secondSlide">

            </div>
            <div class="carousel-item" id="thirdSlide">
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-1 col-1">
                    </div>
                    <div class="col-8">
                        <label id="rel">Relevant Technologies</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-1 col-1"></div>
                    <div class="col-8">
                        <table class="table">
                          <thead>
                            <tr>
                              <th class="tableHeaders" scope="col"></th>
                              <th class="tableHeaders" scope="col">Professional Experience</th>
                              <th class="tableHeaders" scope="col">Personal Experience</th>
                              <th class="tableHeaders" scope="col">In this webpage</th>
                            </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <th scope="row"><asp:ImageButton ID="asp" runat="server" CssClass="imageButtons" src="Images/asp_icon.png" ClientIDMode="Static" data-placement="top" title="ASP.Net" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="bootstrap" runat="server" CssClass="imageButtons" src="Images/bootstrap_icon.png" ClientIDMode="Static" data-placement="top" title="Bootstrap" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="cSharp" runat="server" CssClass="imageButtons" src="Images/cSharp_icon.jpg" ClientIDMode="Static" data-placement="top" title="C#" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="css" runat="server" CssClass="imageButtons" src="Images/css_icon.png" ClientIDMode="Static" data-placement="top" title="CSS" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="html" runat="server" CssClass="imageButtons" src="Images/html_icon.png" ClientIDMode="Static" data-placement="top" title="HTML" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="jQuery" runat="server" CssClass="imageButtons" src="Images/jQuery_icon.jpg" ClientIDMode="Static" data-placement="top" title="jQuery" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="python" runat="server" CssClass="imageButtons" src="Images/python_icon.png" ClientIDMode="Static" data-placement="top" title="Python" /></th>
                              <td></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="sql" runat="server" CssClass="imageButtons" src="Images/SQL_icon.png" ClientIDMode="Static" data-placement="top" title="SQL" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th scope="row"><asp:ImageButton ID="vb" runat="server" CssClass="imageButtons" src="Images/vb_icon.png" ClientIDMode="Static" data-placement="top" title="VB.Net" /></th>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td><img src="Images/checkmark.png" class="chkmrk" /></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <div class="carousel-item" id="getInTouch">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8" id="getInTouchHeader">
                        <h1>Get in touch with me</h1>
                        <br />
                        <h5>Connect with me directly thru this site or thru social media!</h5>
                        <br />
                    </div>
                </div>
                 <div class="row" id="getInTouchForm">
                    <div class="col-lg-2 col-md-2 col-1"></div>
                    <div class="col-5" id="messageForm" style="border-bottom:dashed 1px silver">
                        <label for="name">Name</label>
                        <input id="name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your name">
                        <label for="email">Email</label>
                        <input id="email" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your email">
                        <br />
                        <label for="txtMessage">Message</label>
                        <textarea class="form-control" id="txtMessage" rows="3" placeholder="Begin typing message..."></textarea>
                        <br />
                        <button id="send" type="button" class="btn btn-secondary">Send message!</button>
                    </div>
                    <div class="col-3" style="border-bottom:dashed 1px silver">
                         <div class="row">
                             <div class="col-lg-3 col-md-3 col-sm-2 col-3"></div>
                             <div class="col-lg-3 col-md-3 col-sm-2 col">
                                 <br />
                                 <br />
                                 <a href="https://www.linkedin.com/in/derek-drill-6b29bab1/" class="fa fa-linkedin" title="https://www.linkedin.com/in/derek-drill-6b29bab1/"></a>
                                 <br />
                                 <br />
                                 <a href="https://github.com/ddrill1" class="fa fa-github" title="https://github.com/ddrill1"></a>
                                 <br />
                                 <br />
                                 <a href="https://www.facebook.com/derek.drill.11" class="fa fa-facebook" title="https://www.facebook.com/derek.drill.11"></a>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
          </div>
          <a class="carousel-control-prev" id="prev" href="#myCarousel" role="button" data-slide="prev" style="display:none">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" id="next" href="#myCarousel" role="button" data-slide="next" style="display:none">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    </div>
    <div id="space"></div>
    <script src="Default.js"></script>
</asp:Content>
