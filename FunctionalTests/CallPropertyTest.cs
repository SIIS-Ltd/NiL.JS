using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NiL.JS.Core;
using NiL.JS.Core.Interop;

namespace FunctionalTests
{
    [TestClass]
    public class CallPropertyTest
    {
        private readonly string _jsScript = @"t.property = 20;
                                    t.property2 = 10;
                                    t.property += 20 + t.property2++;
                                    t.property += 20;
                                    console.log(t.property)";
        
        [TestMethod]
        public void CallProperty_Ok()
        {
            var context = new Context();
            context
                .DefineVariable("t")
                .Assign(new TestClassWithProperty());

            var js = _jsScript;

            context.Eval(js);
        }


        public class TestClassWithProperty : CustomType
        {
            public long propety { get; set; }
            
            public long property2 { get; set; }
        }

        [TestMethod]
        public void ParallelCallProperty_Ok()
        {
            var parallelDegree = 100;

            Parallel.For(
                0,
                parallelDegree,
                new ParallelOptions
                {
                    MaxDegreeOfParallelism = parallelDegree
                },
                i =>
                {
                    var context = new Context();
                    context
                        .DefineVariable("t")
                        .Assign(new TestClassWithProperty());

                    var js = _jsScript;

                    context.Eval(js);
                });
        }

    }
}