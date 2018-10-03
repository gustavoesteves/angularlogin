using System.ComponentModel.DataAnnotations;

namespace AngularDefaultLoginProject.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}