using EhiSampleApp.Controllers;
using EhiSampleApp.Data;
using EhiSampleApp.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UnitTestProject
{
    [TestClass]
    public class UnitTest   {


        [TestMethod]
        public async Task TestPutContact()
        {


            Mock<IDbOperaions> mockObject = new Mock<IDbOperaions>();
            mockObject.Setup(a => a.PutContact(1, new Contact() )).ReturnsAsync(new  int());
            ContactsController obj = new ContactsController(mockObject.Object);

            var result = await obj.PutContact(1, new Contact() { Id = 1 });
            Assert.IsTrue(((Microsoft.AspNetCore.Mvc.StatusCodeResult)result).StatusCode==204);
        }
        [TestMethod]
        public async Task TestGetContact1()
        {
            

            Mock<IDbOperaions> mockObject = new Mock<IDbOperaions>();
            mockObject.Setup(a => a.GetContact(1)).ReturnsAsync(new Contact() );
            ContactsController obj = new ContactsController(mockObject.Object);

            var result = await  obj.GetContact(1);
            Assert.IsTrue(!string.IsNullOrEmpty(result.Value.Id.ToString()));
        }
        
    }
}
