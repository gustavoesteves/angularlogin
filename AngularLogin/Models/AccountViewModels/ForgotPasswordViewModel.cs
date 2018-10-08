using System.ComponentModel.DataAnnotations;

namespace AngularLogin.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}