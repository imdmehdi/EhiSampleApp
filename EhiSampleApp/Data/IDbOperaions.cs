using EhiSampleApp.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EhiSampleApp.Data
{
    public interface IDbOperaions
    {
        public DbSet<Contact> GetContact();
        public Task<Contact> GetContact(int id);
        public Task<int> PutContact(int id, Contact contact);
        public Task<int> PostContact(Contact contact);
        public Task<int> DeleteContact(int id);

    }
    public class DbOperaions : IDbOperaions
    {
        private readonly EhiSampleAppContext _context;

        public DbOperaions(EhiSampleAppContext context)
        {
            _context = context;
        }
        public  DbSet<Contact> GetContact()
        {
            return  _context.Contact;
        }
        public  async Task<Contact> GetContact(int id)
        {
            return await _context.Contact.FindAsync(id);
        }
        public async Task<int> PutContact(int id, Contact contact)
        {
            _context.Entry(contact).State = EntityState.Modified;
             return await _context.SaveChangesAsync();

        }
        public async Task<int> PostContact(Contact contact)
        {
            _context.Contact.Add(contact);
           return await _context.SaveChangesAsync();
        }
        public async Task<int> DeleteContact(int id)
        {
            var contact = await _context.Contact.FindAsync(id);

            contact.Status = "In Active";
            _context.Entry(contact).State = EntityState.Modified;
           return  await _context.SaveChangesAsync();
        }
    }
}
