using System;
using System.ComponentModel;
using System.Linq;
using System.Web.Mvc;
using Telerik.Sitefinity.Mvc;
using SitefinityRedrow.Web.Mvc.Models;
using Telerik.Sitefinity.Services;
using Telerik.Sitefinity.Web;
using System.Collections.Generic;
using Telerik.Sitefinity.Data;
using Telerik.Sitefinity.News.Model;

namespace SitefinityRedrow.Web.Mvc.Controllers
{
    [ControllerToolboxItem(Name = "PressReleases", Title = "PressReleases", SectionName = "MvcWidgets")]
    public class PressReleasesController : Controller
    {
        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        [Category("String Properties")]
        public string Message { get; set; }

        /// <summary>
        /// This is the default Action.
        /// </summary>
        public ActionResult Index()
        {
            var model = new PressReleasesModel();
            if (string.IsNullOrEmpty(this.Message))
            {
                model.Message = "Hello, World!";
            }
            else
            {
                model.Message = this.Message;
            }

            return View("Default", model);
        }

        private void SubscribeCacheDependency()
        {
            var contextItems = SystemManager.CurrentHttpContext.Items;
            var isBackendRequest = contextItems.Contains(SystemManager.IsBackendRequestKey) && ((bool)contextItems[SystemManager.IsBackendRequestKey]);

            if (isBackendRequest)
                return;

            if (!contextItems.Contains(PageCacheDependencyKeys.PageData))
                contextItems.Add(PageCacheDependencyKeys.PageData, new List<CacheDependencyKey>());

            var existingKeys = (List<CacheDependencyKey>)contextItems[PageCacheDependencyKeys.PageData];
            var keysToAdd = this.GetCacheDependencyKeys();

            existingKeys.AddRange(keysToAdd);
        }

        private IEnumerable<CacheDependencyKey> GetCacheDependencyKeys()
        {
            var cacheDependencyNotifiedObjects = new List<CacheDependencyKey>();

            cacheDependencyNotifiedObjects.Add(new CacheDependencyKey() { Type = typeof(NewsItem) });

            return cacheDependencyNotifiedObjects;
        }
    }
}